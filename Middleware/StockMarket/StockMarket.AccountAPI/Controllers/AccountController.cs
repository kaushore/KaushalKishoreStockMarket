﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Services;
using StockMarket.AccountAPI.Controllers;
using StockMarket.AccountAPI.Models;


namespace StockMarket.AccountAPI.Controllers
{
   

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService service;
        
        public AccountController(IAccountService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Account Service");
        }

        [HttpPost]        
        [Route("AddUser")]
        public IActionResult AddUser (User item)
        {
            try
            {
                service.AddUser(item);                
                return Ok();
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("Validate/{uname}/{pwd}")]
        public IActionResult Validate(string uname, string pwd)
        {
            try
            {
                User user = service.Validate(uname, pwd);
                if (user == null)
                {
                    return Content("Invalid User");
                }                    
                else
                {
                    return Ok(user);
                }
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("EditUser")]
        public IActionResult EditUserDetails(User user)
        {
            try
            {
                if (user == null)
                    return NotFound();

                var userToUpdate = service.EditUserDetails(user);

                return Ok(userToUpdate);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            
        }

    }
}
