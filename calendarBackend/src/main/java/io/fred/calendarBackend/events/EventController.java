package io.fred.calendarBackend.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/events")
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	@PostMapping
	public ResponseEntity<Event> createItem(@Valid @RequestBody CreateEventDTO data) {
		Event createdItem = this.eventService.createItem(data);
		return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
		 
	}
	
	@GetMapping
	public String getEvents() {
		return "Successfully got all";
	}
	
	@GetMapping("/{id}")
	public String getEventById(@PathVariable Long id) {
		return "Successfully got by ID";
	}
}
