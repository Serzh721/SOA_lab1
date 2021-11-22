package controller;

import service.FlatService;
import util.FlatListWrap;
import util.JPAUtil;
import util.RequestStructure;
import util.XStreamUtil;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Objects;

@WebServlet(name = "main", value = "/api/flats/*")
public class MainServlet extends HttpServlet {

    private FlatService flatService;

    public void init() {
        flatService = new FlatService();
    }

    static void preprocessResponse(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
        response.addHeader("Access-Control-Allow-Headers", "Content-Type");
        response.addHeader("Access-Control-Allow-Credentials", "true");
    }

    static void processResponse(HttpServletResponse response, RequestStructure requestStructure) throws IOException {
        response.setContentType("application/xml");
        response.setStatus(requestStructure.getResponseCode());
        PrintWriter out = response.getWriter();
        out.println(requestStructure.getMessage());
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        preprocessResponse(response);
        RequestStructure requestStructure = RequestStructure.fromRequest(request);
        if (!Objects.isNull(requestStructure.getId())) {
            flatService.getFlat(requestStructure);
        } else if (Objects.isNull(requestStructure.getMessage())) {
            flatService.getFlatList(requestStructure);
        } else if (requestStructure.getMessage().equals("pricelower")) {
            Long num = JPAUtil.getNumberPriceLower(requestStructure.getParams().get("string")[0]);
            requestStructure.setMessage(Objects.isNull(num) ? null : num.toString());
            requestStructure.setResponseCode(200);
        } else if (requestStructure.getMessage().equals("namescontain")) {
            requestStructure.setMessage(XStreamUtil.toXML(new FlatListWrap(JPAUtil.getNamesContain(requestStructure.getParams().get("string")[0]), 0)));
            requestStructure.setResponseCode(200);
        } else if (requestStructure.getMessage().equals("namesstart")) {
            requestStructure.setMessage(XStreamUtil.toXML(new FlatListWrap(JPAUtil.getNamesStart(requestStructure.getParams().get("string")[0]), 0)));
            requestStructure.setResponseCode(200);
        } else {
            requestStructure.setMessage("resource not found");
            requestStructure.setResponseCode(404);
        }
        processResponse(response, requestStructure);
    }

    public void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
        preprocessResponse(response);
        RequestStructure requestStructure = RequestStructure.fromRequest(request);
        flatService.modifyFlat(requestStructure);
        processResponse(response, requestStructure);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        preprocessResponse(response);
        RequestStructure requestStructure = RequestStructure.fromRequest(request);
        flatService.addFlat(requestStructure);
        processResponse(response, requestStructure);
    }

    public void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        preprocessResponse(response);
        RequestStructure requestStructure = RequestStructure.fromRequest(request);
        flatService.deleteFlat(requestStructure);
        processResponse(response, requestStructure);
    }

    public void doOptions(HttpServletRequest request, HttpServletResponse response) {
        preprocessResponse(response);
    }

    public void destroy() {
    }
}