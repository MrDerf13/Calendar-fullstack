package io.fred.calendarBackend.events;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import io.fred.calendarBackend.labels.Label;
//import jakarta.persistence.criteria.CriteriaBuilder;
//import jakarta.persistence.criteria.CriteriaQuery;
//import jakarta.persistence.criteria.Predicate;
//import jakarta.persistence.criteria.Root;

public class EventSpecification {
	
	private EventSpec() {
		
	}
	
	public static Specification<Event> filterBy(EventsFilter eventsFilter){
		return Specification
				.where(hasLabel(eventsFilter.getLabel())
				.and(hasLocation(eventsFilter.getLocation())));
	}
	
	private static Specification<Event> hasLabel(Label label) {
        return ((root, query, cb) -> label == null ? cb.conjunction() : cb.equal(root.get("label"), label));
    }

    private static Specification<Event> hasLocation(String location) {
        return (root, query, cb) -> location == null ? cb.conjunction() : cb.equal(root.get("location"), location);
    }
}
