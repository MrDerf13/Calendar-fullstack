package io.fred.calendarBackend.events;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;


@Service
@Transactional
public class EventService {

	public Event createItem(@Valid CreateEventDTO data) {
		// TODO Auto-generated method stub
		return null;
	}

}
