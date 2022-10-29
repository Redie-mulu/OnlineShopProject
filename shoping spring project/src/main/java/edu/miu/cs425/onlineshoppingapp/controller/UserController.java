package edu.miu.cs425.onlineshoppingapp.controller;

import edu.miu.cs425.onlineshoppingapp.dtos.CartItemDto;
import edu.miu.cs425.onlineshoppingapp.model.CartItem;
import edu.miu.cs425.onlineshoppingapp.model.ShoppingCart;
import edu.miu.cs425.onlineshoppingapp.model.User;
import edu.miu.cs425.onlineshoppingapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = {"/user"})
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(value = "/shoppingCart", consumes = {"application/json;charset=UTF-8"})
    public void addCartItemToShoppingCart(@RequestBody CartItemDto cartItem) {
        userService.addCartItemToUseShoppingCart(cartItem);
    }

    @GetMapping("/shoppingCart")
    public ShoppingCart getUsersShoppingCart() {
        System.out.println(userService.getUserShoppingCart());
        return userService.getUserShoppingCart();
    }
     public void creatOrder(User user) {

     }

}
