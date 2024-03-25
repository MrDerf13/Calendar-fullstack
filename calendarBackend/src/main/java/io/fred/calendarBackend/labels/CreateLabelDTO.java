package io.fred.calendarBackend.labels;

import jakarta.validation.constraints.NotBlank;

public class CreateLabelDTO {
	
	@NotBlank
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
