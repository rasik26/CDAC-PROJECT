namespace BOL;

public class Product
{
    public int Id { get; set; }

    public string Title { get; set; }

    public string ArtistName { get; set; }

    public string Description { get; set; }

    public int Price { get; set; }

    public int DiscountedPrice { get; set; }

    public int DiscountPercentage { get; set; }

    public string ImageUrl { get; set; }

    public int CategoryId {get;set;}

    public int ArtistId {get;set;}

    // Default constructor
    public Product()
    {
        // Initialize any properties if necessary
    }

    // Parameterized constructor
    public Product(int id, string title, string artistName, string description, int price, int discountedPrice, int discountPercentage, string imageUrl)
    {
        Id = id;
        Title = title;
        ArtistName = artistName;
        Description = description;
        Price = price;
        DiscountedPrice = discountedPrice;
        DiscountPercentage = discountPercentage;
        ImageUrl = imageUrl;
    }
}

