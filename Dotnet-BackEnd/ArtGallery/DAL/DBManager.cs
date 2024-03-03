using System.Reflection.Metadata.Ecma335;
using BOL;
namespace DAL;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
public class DBManager
{

    public static string conString = @"server=localhost;port=3306;user=root;password=123Sanyog123@;database=dotnetproj";

    public List<Product> GetAllProducts()
    {
        List<Product> products = new List<Product>();

        MySqlConnection connection = new MySqlConnection(conString);

        String query = "SELECT * FROM products";

        MySqlCommand command = new MySqlCommand(query, connection);

        connection.Open();

        MySqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            Product product = new Product
            {
                Id = reader.GetInt32("id"),
                ArtistName = reader.GetString("artist_name"),
                Description = reader.GetString("description"),
                DiscountPercentage = reader.GetInt32("discount_percentage"),
                DiscountedPrice = reader.GetInt32("discounted_price"),
                ImageUrl = reader.GetString("image_url"),
                Price = reader.GetInt32("price"),
                Title = reader.GetString("title"),
                ArtistId = reader.GetInt32("artist_id"),
                CategoryId = reader.GetInt32("category_id")
            };

            products.Add(product);
        }
        return products;
    }




    public Product GetProductById(int id)
    {
        Product p = null;
        MySqlConnection connection = new MySqlConnection(conString);
        string query = "select * from products where id = @id";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", id);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();

        if (reader.Read())
        {
            p = new Product
            {
                Id = reader.GetInt32("id"),
                ArtistName = reader.GetString("artist_name"),
                Description = reader.GetString("description"),
                DiscountPercentage = reader.GetInt32("discount_percentage"),
                DiscountedPrice = reader.GetInt32("discounted_price"),
                ImageUrl = reader.GetString("image_url"),
                Price = reader.GetInt32("price"),
                Title = reader.GetString("title"),
                ArtistId = reader.GetInt32("artist_id"),
                CategoryId = reader.GetInt32("category_id")
            };
        }

        return p;
    }



    public List<Product> getProductByArtistName(String ArtistName){
        List<Product> list = new List<Product>();
        MySqlConnection connection = new MySqlConnection(conString);
        String query = "SELECT * FROM products WHERE artist_name = @ArtistName";
        MySqlCommand command = new MySqlCommand(query,connection);
         command.Parameters.AddWithValue("@ArtistName", ArtistName);
         connection.Open();
         MySqlDataReader reader = command.ExecuteReader();
          while (reader.Read())
        {
            Product product = new Product
            {
                Id = reader.GetInt32("id"),
                ArtistName = reader.GetString("artist_name"),
                Description = reader.GetString("description"),
                DiscountPercentage = reader.GetInt32("discount_percentage"),
                DiscountedPrice = reader.GetInt32("discounted_price"),
                ImageUrl = reader.GetString("image_url"),
                Price = reader.GetInt32("price"),
                Title = reader.GetString("title"),
                ArtistId = reader.GetInt32("artist_id"),
                CategoryId = reader.GetInt32("category_id")
            };

            list.Add(product);
        }
        return list;
    }




    //getting all users
    public List<User> GetAllUsers()
    {
        List<User> users = new List<User>();

        MySqlConnection connection = new MySqlConnection(conString);

        string query = "SELECT * FROM user";

        MySqlCommand command = new MySqlCommand(query, connection);

        connection.Open();

        MySqlDataReader reader = command.ExecuteReader();

        while (reader.Read())
        {
            User user = new User
            {
                Id = reader.GetInt32("id"),
                CreatedAt = reader.GetDateTime("created_at"),
                Email = reader.GetString("email"),
                FirstName = reader.GetString("firstname"),
                LastName = reader.GetString("lastname"),
                Mobile = reader.GetString("mobile"),
                Password = reader.GetString("password"),
                Role = reader.GetString("role")
            };

            users.Add(user);
        }


        return users;
    }



}


