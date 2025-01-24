package com.example.shot_select;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        System.out.println("Configuring CORS...");
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "https://shot-select.vercel.app") // Allow frontend's URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify allowed HTTP methods
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Enable credentials if needed (e.g., for cookies/auth tokens)
    }
}
