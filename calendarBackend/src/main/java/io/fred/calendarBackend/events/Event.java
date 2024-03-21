package io.fred.calendarBackend.events;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="events")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private LocalDateTime startDate;
	
	@Column
	private LocalDateTime endDate;
	
	@Column
	private Integer location;
	
	@Column
	private Integer[] labels;
}
