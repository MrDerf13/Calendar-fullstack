package io.fred.calendarBackend.events;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateEventDTO {
	@NotBlank
	private String name;
	
	@NotNull
	private LocalDateTime startDate;
	
	@NotNull
	private LocalDateTime endDate;

	private String location;

	@NotNull
	@Min(1)
	private Long labelId;

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
	
	
	public Long getLabelId() {
		return labelId;
	}
}
