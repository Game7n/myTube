package ru.m1rox.mytube.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Collection;
import java.util.List;

@WebServlet("/video")
@MultipartConfig(location = "C:\\Users\\Nikita\\IdeaProjects\\myTube\\videos")
public class VideoServlet extends HttpServlet {

  @Override
  protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("--options--");
  }
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("do get");
    resp.getWriter().write("test");
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    System.out.println("--post--");

    Part part = req.getPart("video");
    part.write(part.getSubmittedFileName());
    System.out.println(part.getContentType());

    resp.getWriter().write("123");
    resp.getWriter().close();
  }
}
