package io.fred.calendar.Backend.labels;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.fred.calendarBackend.events.Event;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="labels")
public class Label {
	@OneToMany(mappedBy = "label")
	@JsonIgnoreProperties("label")
	private List<Event> events;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String name;
	

	public List<Event> getEvents() {
		return events;
	}

	public String getName() {
		return name;
	}

	public void setEvents(List<Event> events) {
		this.events = events;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
