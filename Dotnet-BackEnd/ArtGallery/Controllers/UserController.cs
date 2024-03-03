using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BOL;
using BLL;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Tls;

namespace WebAPI.Controllers;
[ApiController]
[Route("api/[controller]")]

public class User : Controller
{
    private readonly ILogger<User> _logger;

    public User(ILogger<User> logger)
    {
        _logger = logger;
    }

    [HttpGet("Users")]
    public IActionResult GetAllUser()
    {
        UserManager pm = new UserManager();
        List<BOL.User> list = pm.GetAllUsers();
        if (list != null)
        {
            return Ok(list);
        }
        else
        {
            return NotFound();
        }
    }

}