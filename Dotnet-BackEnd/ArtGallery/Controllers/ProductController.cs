using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BOL;
using BLL;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Tls;
using System.Globalization;

namespace WebAPI.Controllers;
[ApiController]
[Route("api/[controller]")]

public class Product : Controller
{
    private readonly ILogger<Product> _logger;

    public Product(ILogger<Product> logger)
    {
        _logger = logger;
    }

    [HttpGet("products")]
    public IActionResult GetAllProducts()
    {
        ProductManager pm = new ProductManager();
        List<BOL.Product> list = pm.GetProducts();
        Console.WriteLine("ClientHello");
        if (list != null)
        {
            Console.WriteLine("ClientHello");
            return Ok(list);
        }
        else
        {
            return NotFound();
        }
    }
    [HttpGet("products/pid")]
    public IActionResult GetProductById(int pid){
        ProductManager pm = new ProductManager();
        BOL.Product p = pm.GetProductById(pid);
        if(p != null){
            return Ok(p);
        }
        return NotFound();


    }
    [HttpGet("products/ArtistName")]
    public IActionResult getProductByArtistName(String ArtistName){
        ProductManager pm = new ProductManager();
        List<BOL.Product> list = pm.getProductByArtistName(ArtistName);
        if(list != null){
            return Ok(list);
        }
        return NotFound();
    }

}