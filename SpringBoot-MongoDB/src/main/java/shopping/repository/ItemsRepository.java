package shopping.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import shopping.shop.model.Items;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemsRepository extends MongoRepository<Items,String>
{
    List<Items> findAllByCategory(String category);
    List<Items> findAllByName(String name);
    List<Items> findAllByCategoryAndPriceBetween(String category  , double price1 , double price2);
    List<Items> findAllByCategoryAndSubcategoryAndPriceBetween(String category ,String subcategory  , double price1 , double price2);

    List<Items> findAllByCategoryAndSubcategory(String cate, String sub);

    List<Items> findAllByDescriptionContaining(String description);

    Optional<Items> findById(int key);

    List<Items> deleteById(int key);

    Optional<Items> findByKey(int key);
}

