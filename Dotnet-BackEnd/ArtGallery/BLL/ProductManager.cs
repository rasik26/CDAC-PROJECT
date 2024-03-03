namespace BLL;
using BOL;
using DAL;
public class ProductManager{
    public List<Product> GetProducts(){ 
        DBManager dbm = new DBManager();
        return dbm.GetAllProducts();
    }
    
    public Product GetProductById(int pid){
        DBManager dbm = new DBManager();
        return dbm.GetProductById(pid);
    }

    public List<Product> getProductByArtistName(String ArtistName){
        DBManager dbm = new DBManager();
        return dbm.getProductByArtistName(ArtistName);
    }

    
}