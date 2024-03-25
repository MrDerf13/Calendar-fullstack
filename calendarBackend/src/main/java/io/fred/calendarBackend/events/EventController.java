package io.fred.calendarBackend.events;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.fred.calendarBackend.labels.Label;
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
	public ResponseEntity<List<Event>> getAllEvents() {
		List<Event> allEvents = this.eventService.findAll();
		return new ResponseEntity<>(allEvents, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public String getEventById(@PathVariable Long id) {
		return "Successfully got by ID";
	}
	
	@GetMapping("/{searchTerm}")
	public ResponseEntity<List<Event>> getEventsByFilter(@PathVariable String searchTerm){
		List<Event> filteredEvents = this.eventService.getEventsByFilter(searchTerm);
		return new ResponseEntity<>(filteredEvents, HttpStatus.OK);
	}
	
}
