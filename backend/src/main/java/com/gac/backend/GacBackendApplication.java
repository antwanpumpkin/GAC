package com.gac.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.gac.configuration",
        "com.gac.api.impl",
        "com.gac.metier.impl"
})
public class GacBackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(GacBackendApplication.class, args);
	}

}
