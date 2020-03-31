package shopping.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shopping.shop.model.Cart;
import shopping.shop.model.Items;
import shopping.shop.model.OrderHistory;
import shopping.shop.model.Users;
import shopping.shop.repository.CartRepository;
import shopping.shop.repository.ItemsRepository;
import shopping.shop.repository.OrderHistoryRepository;
import shopping.shop.repository.UsersRepository;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private ItemsRepository itemsRepository;
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private OrderHistoryRepository orderHistoryRepository;

    public Cart addtocart(String getusername, int key) {

        Optional<Items> item = itemsRepository.findByKey(key);
        Optional<Users> users = usersRepository.findByUsername(getusername);

        if(cartRepository.findByUserAndItem(users , item).isPresent())
        {
            Cart car = cartRepository.findByUserAndItem(users,item).get();
            car.setQuantity(car.getQuantity() + 1);
            cartRepository.save(car);
        }

        else
        {
            Cart c = new Cart(item.get() , users.get() , 1);
            cartRepository.save(c);
        }

        return cartRepository.findByUserAndItem( users , item).get();
    }

    public Cart removeproduct(String getusername, int key) {

        Cart car= new Cart();
        return car;
    }

    public String addproduct(String getusername, int key) {

        Optional<Items> item = itemsRepository.findByKey(key);
        Optional<Users> users = usersRepository.findByUsername(getusername);

        if(cartRepository.findByUserAndItem(users , item).isPresent())
        {
            return "this item is already present";
        }
        else
        {
            Cart car = new Cart();
            car.setItem(item.get());
            car.setUser(users.get());
            cartRepository.save(car);
            return "Successfully added";
        }

    }

    public Cart removefromcart(String getusername, int key) {

        Optional<Items> item = itemsRepository.findByKey(key);
        Optional<Users> users = usersRepository.findByUsername(getusername);

        if(cartRepository.findByUserAndItem(users,item).get().getQuantity() <= 1)
        {
            Cart car =  cartRepository.findByUserAndItem(users,item).get();
            cartRepository.delete(car);
            return new Cart();
        }
        else {
            Cart car = cartRepository.findByUserAndItem(users, item).get();
            car.setQuantity(car.getQuantity() - 1);
            cartRepository.save(car);

            return cartRepository.findByUserAndItem( users , item).get();
        }
    }

    public List<Cart> showcart(String getusername, Principal principal) {
        Optional<Users> user= usersRepository.findByUsername(getusername);
        return cartRepository.findAllByUser(user.get());
    }

    public double checkout(String getusername, Principal principal) {

        Optional<Users> user = usersRepository.findByUsername(getusername);
        List<Cart> car = cartRepository.findAllByUser(user.get());
        for( Cart cart : car) {
            OrderHistory order = new OrderHistory();
            //order.setOrderId(cart.getId());
            order.setItem(cart.getItem());
            double p = cart.getItem().getPrice();
            order.setQuantity(cart.getQuantity());
            order.setPrice((cart.getQuantity() * p));
            order.setUser(cart.getUser());
            order.setdate1();
            orderHistoryRepository.save(order);
        }
        clearcart(getusername,principal);
        return 0;
    }

    public Cart clearcart(String getusername, Principal principal) {

        Optional<Users> user = usersRepository.findByUsername(getusername);
        List<Cart> cartitem = cartRepository.findAllByUser(user.get());
        for( Cart cart : cartitem)
        {
            cartRepository.deleteById(cart.getId());
        }
        return new Cart();
    }

    public Cart remove1fromcart(String getusername, int key) {

        Optional<Items> item = itemsRepository.findById(key);
        Optional<Users> users = usersRepository.findByUsername(getusername);
        Cart car =  cartRepository.findByUserAndItem(users,item).get();
        cartRepository.delete(car);
        return new Cart();
    }

    public List<OrderHistory> history(String getusername, Principal principal) {
        Optional<Users> users = usersRepository.findByUsername(getusername);
        List<OrderHistory> order = orderHistoryRepository.findAllByUser(users);
        return order;
    }
}
