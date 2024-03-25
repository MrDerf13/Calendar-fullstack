package io.fred.calendarBackend.events;

import io.fred.calendarBackend.labels.Label;

public class EventsFilter {
	private Label label;
	private String location;
	public Label getLabel() {
		return label;
	}
	public String getLocation() {
		return location;
	}
	public void setLabel(Label label) {
		this.label = label;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
}
