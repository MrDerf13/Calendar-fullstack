package io.fred.calendarBackend.events;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import io.fred.calendarBackend.labels.Label;
import io.fred.calendarBackend.labels.LabelService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;


@Service
@Transactional
public class EventService {

	@Autowired
	private EventRepository repo;
	
	@Autowired LabelService lableService;
	
	@Autowired ModelMapper mapper;
	
	public Event createItem(@Valid CreateEventDTO data) {
		Event newEvent = mapper.map(data, Event.class);
		Long labelId = data.getLabelId();

		Optional<Label> maybeLabel = this.lableService.findById(labelId);
		if (maybeLabel.isEmpty()) {
			return null;
		} else {
			newEvent.setLabel(maybeLabel.get());
		}
		
		return this.repo.save(newEvent);
	}

	public List<Event> findAll() {
		return this.repo.findAll();
	}
	
	public List<Event> getEventsByFilter(EventsFilter filter){
		Specification<Event> spec = EventSpecification.filterBy(filter);
		return this.repo.findAll(spec);
	}
}
