package com.characterconverter.application;

import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */

@SpringBootApplication
@Theme(value = "characterconverterTheme", variant = Lumo.DARK)
//@JsModule("@vaadin/vaadin-lumo-styles/presets/compact.js")
@PWA(name = "Character Converter", shortName = "Character Converter", offlineResources = {})
@NpmPackage(value = "line-awesome", version = "1.3.0")
public class ConverterApp implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(ConverterApp.class, args);
    }

}
