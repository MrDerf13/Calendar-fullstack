package io.fred.calendarBackend.events;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public class UpdateEventDTO {
	@NotBlank
	private String title;
	
	@NotBlank
	private LocalDateTime startDate;
	
	@NotBlank
	private LocalDateTime endDate;
	
	private Integer location;
	
	private Integer[] labels;

	public String getTitle() {
		return title;
	}
	
	public LocalDateTime getStartDate() {
		return startDate;
	}
	
	public LocalDateTime getEndDate() {
		return endDate;
	}

	public Integer getLocation() {
		return location;
	}

	public Integer[] getLabels() {
		return labels;
	}
}
