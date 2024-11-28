package com.backendintern.loginDetailsForTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class Controller {

	@Autowired
	private UserService userService;
	@RequestMapping("/")
	public String Home() {
		return "Hello World";
	}
	@PostMapping("/add")
	public String addUser(@RequestBody User user) {
		try {
			userService.addUser(user);
			return "Success";
		}
		catch(Exception e) {
			return e.getMessage();
		}
	}
	
}
