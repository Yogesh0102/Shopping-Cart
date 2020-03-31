package shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shopping.shop.model.Cart;
import shopping.shop.model.OrderHistory;
import shopping.shop.service.CartService;
import shopping.shop.service.CurrentUserService;

import java.security.Principal;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/cart")
public class CartController {


    @Autowired
    CartService cartserv;
    @Autowired(required =true)
    CurrentUserService currentserv;

    @ResponseBody
    @RequestMapping(value="/addtocart")
    public Cart addtocart(@RequestParam int key , Principal principal)
    {
        return cartserv.addtocart( currentserv.getusername(principal),key );
    }

    @RequestMapping( value = "/removeproduct/{key}" , method = RequestMethod.GET)
    @ResponseBody
    public Cart removeproduct(@PathVariable int key , Principal principal)
    {
        return cartserv.removeproduct(currentserv.getusername(principal),key);
    }

    @RequestMapping( value = "/addproduct/{key}" , method = RequestMethod.GET)
    @ResponseBody
    public String addproduct(@PathVariable int key , Principal principal)
    {
        return cartserv.addproduct(currentserv.getusername(principal),key);
    }

    @RequestMapping( value = "/removefromcart/{key}" , method = RequestMethod.GET)
    @ResponseBody
    public Cart removefromcart(@PathVariable int key , Principal principal)
    {
        return cartserv.removefromcart(currentserv.getusername(principal),key);
    }

    @RequestMapping( value = "/remove1fromcart/{key}" , method = RequestMethod.GET)
    @ResponseBody
    public Cart remove1fromcart(@PathVariable int key , Principal principal)
    {
        return cartserv.remove1fromcart(currentserv.getusername(principal),key);
    }

    @RequestMapping( value = "/showcart" , method = RequestMethod.GET)
    @ResponseBody
    public List<Cart> showcart(Principal principal)
    {
        return cartserv.showcart(currentserv.getusername(principal),principal);
    }

    @RequestMapping( value = "/history" , method = RequestMethod.GET)
    @ResponseBody
    public List<OrderHistory> history(Principal principal)
    {
        return cartserv.history(currentserv.getusername(principal),principal);
    }

    @RequestMapping( value = "/checkout" , method = RequestMethod.GET)
    @ResponseBody
    public double checkout(Principal principal)
    {
        return cartserv.checkout(currentserv.getusername(principal),principal);
    }

    @RequestMapping( value = "/clearcart" , method = RequestMethod.GET)
    @ResponseBody
    public Cart clearcart(Principal principal)
    {
        return cartserv.clearcart(currentserv.getusername(principal),principal);
    }
}