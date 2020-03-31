package shopping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShoppingApplication
{
    public static void main(String[] args) {
        System.setProperty("server.PORT", "8081");
        SpringApplication.run(ShoppingApplication.class, args);
    }
}
