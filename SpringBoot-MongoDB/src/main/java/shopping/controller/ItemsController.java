package shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shopping.shop.Exception.NotFound;
import shopping.shop.model.Items;
import shopping.shop.repository.ItemsRepository;
import shopping.shop.service.CurrentUserService;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ItemsController
{
    @Autowired
    ItemsRepository ItemsRepo;
    @Autowired
    CurrentUserService currentUserService;

    @GetMapping("/getPro")
    public List<Items> getAllNotes() {
        return ItemsRepo.findAll();
    }

    @GetMapping("/get_cate/{category}")
    public List<Items> getItem(@PathVariable( value = "category") String cate)
    {
        return ItemsRepo.findAllByCategory(cate);
    }

    @GetMapping("/{category}/{first}/{last}")
    public List<Items> getPrice(@PathVariable (value = "category") String cate , @PathVariable ( value = "first" ) double price1 , @PathVariable (value = "last") double price2)
    {
        return ItemsRepo.findAllByCategoryAndPriceBetween(cate,price1, price2);
    }

    @GetMapping("/search/{description}")
    public List<Items> search(@PathVariable (value = "description") String description)
    {
        return ItemsRepo.findAllByDescriptionContaining(description);
    }

    @GetMapping("/sub/{category}/{subcategory}/{first}/{last}")
    public List<Items> getPrice1(@PathVariable ( value = "category") String cate ,@PathVariable (value = "subcategory") String sub , @PathVariable ( value = "first" ) double price1 , @PathVariable (value = "last") double price2) {
        return ItemsRepo.findAllByCategoryAndSubcategoryAndPriceBetween(cate, sub, price1, price2);
    }
    @GetMapping("/{category}/{subcategory}")
    public List<Items> getItem1(@PathVariable ( value = "category") String cate ,@PathVariable( value = "subcategory") String sub)
    {
        return ItemsRepo.findAllByCategoryAndSubcategory(cate,sub);
    }

    @GetMapping("/get_name/{name}")
    public List<Items> getItem2(@PathVariable( value = "name") String name)
    {
        return ItemsRepo.findAllByName(name);
    }


    @PostMapping("/postPro")
    public Items createNote(@Valid @RequestBody Items user1) {
        return ItemsRepo.save(user1);
    }

    @GetMapping("/get2")
    public Items getNoteById(@RequestParam int key) {
        return ItemsRepo.findByKey(key)
                .orElseThrow(() -> new NotFound("Note", "id", key));
    }

    @PutMapping("/putPro")
    public Items putting(@Valid @RequestBody Items item , Principal principal)
    {
        Items items1 = ItemsRepo.findById(item.getKey()).get();
        items1.setCategory(item.getCategory());
        items1.setDescription(item.getDescription());
        items1.setImg(item.getImg());
        items1.setName(item.getName());
        items1.setPrice(item.getPrice());
        items1.setSubcategory(item.getSubcategory());
        return ItemsRepo.save(items1);
    }

    @DeleteMapping("/delete/{id}")
    public List<Items> del(@PathVariable(value = "id") int key)
    {
        ItemsRepo.deleteById(key);
        return ItemsRepo.findAll();
    }
}