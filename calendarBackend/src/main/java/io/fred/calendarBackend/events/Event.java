package io.fred.calendarBackend.events;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.fred.calendarBackend.labels.Label;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	private String location;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "label_id")
	@JsonIgnoreProperties("events")
	private Label label;

	public String getName() {
		return name;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public String getLocation() {
		return location;
	}

	public Label getLabel() {
		return label;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public void setLabel(Label label) {
		this.label = label;
	}
}
