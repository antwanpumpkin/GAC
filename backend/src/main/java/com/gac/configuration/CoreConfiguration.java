package com.gac.configuration;

//import javax.persistence.Entity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Classe de configuration Spring du module core
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {
                "com.gac.configuration",
                "com.gac.api.impl",
                "com.gac.metier.impl"// classes métiers
})
//@PropertySource("classpath:technical.properties") // chargement des propriétés techniques/
//@EnableJpaRepositories(basePackages = {"fr.acoss.dla.core.layer.dao", "fr.acoss.dla.core.modele.persistence"})
public class CoreConfiguration {
  /**
   * Logger
   */
  private static final Logger LOGGER = LoggerFactory.getLogger(CoreConfiguration.class);

  /**
   * Liste des fichiers de libellés à charger pour le bean MessageSource
   */
  private static final String[] MESSAGE_FILES = {"classpath:erreurs", "classpath:labels", "classpath:technical"};

  /**
   * Encodage des fichiers de propriétés
   */
  private static final String MESSAGE_ENCODAGE = "UTF-8";

  /**
   * Constructeur
   */
  public CoreConfiguration() {
    LOGGER.info("Chargement de la configuration CoreConfiguration");
  }

  /**
   * Bean MessageSource pour charger les propriétés
   *
   * @return MessageSource
   */
  @Bean
  public MessageSource messageSource() {
    LOGGER.info("Construction du bean MessageSource");
    final ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
    messageSource.setBasenames(MESSAGE_FILES);
    // if true, the key of the message will be displayed if the key is not
    // found, instead of throwing a NoSuchMessageException
    messageSource.setUseCodeAsDefaultMessage(true);
    messageSource.setDefaultEncoding(MESSAGE_ENCODAGE);
    // # -1 : never reload, 0 always reload
    messageSource.setCacheSeconds(0);
    return messageSource;
  }
  
  

  /**
   * pour utiliser l'annotation value
   *
   * @return PropertySourcesPlaceholderConfigurer
   */
  @Bean
  public static PropertySourcesPlaceholderConfigurer propertyPlaceholderConfigurer() {
    return new PropertySourcesPlaceholderConfigurer();
  }

}
