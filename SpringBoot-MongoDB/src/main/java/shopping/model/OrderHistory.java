package shopping.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;

public class OrderHistory
{
    public OrderHistory(){}

    @Id
    private Long OrderId;
    private Items item;
    private Users user;
    private int quantity;
    private double price;
    private LocalDate date1;

    public LocalDate getDate1() {
        return date1;
    }

    public void setdate1()
    {
        this.date1 = LocalDate.now();
    }

    public Long getOrderId() {
        return OrderId;
    }

    public void setOrderId(Long orderId) {
        OrderId = orderId;
    }

    public Items getItem() {
        return item;
    }

    public void setItem(Items item) {
        this.item = item;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
