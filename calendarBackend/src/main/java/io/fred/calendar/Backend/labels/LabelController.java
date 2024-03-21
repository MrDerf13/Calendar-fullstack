package io.fred.calendar.Backend.labels;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/labels")
public class LabelController {
	@Autowired
	private LabelService labelService;
	
	@PostMapping
	public ResponseEntity<Label> create(@Valid @RequestBody CreateLabelDTO data) {
		Label createdLabel = this.labelService.create(data);
		return new ResponseEntity<>(createdLabel, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Label>> findAll() {
		List<Label> allCategories = this.labelService.findAll();
		return new ResponseEntity<>(allCategories, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Label> getLabelById(@PathVariable Long id) throws NotFoundException {
		Optional<Label> maybeLabel = this.labelService.findById(id);
		Label foundLabel = maybeLabel.orElseThrow(() -> new NotFoundException(Label.class, id));
		return new ResponseEntity<>(foundLabel, HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Label> updateLabelById(@Valid @RequestBody UpdateLabelDTO data, @PathVariable Long id) throws NotFoundException, ServiceValidationException {
		Optional<Label> maybeUpdatedLabel = this.labelService.updateById(data, id);
		Label updatedLabel = maybeUpdatedLabel.orElseThrow(() -> new NotFoundException(Label.class, id));
		return new ResponseEntity<>(updatedLabel, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Label> deleteLabelById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.labelService.deleteLabelById(id);
		if(!deleted) {
			throw new NotFoundException(Label.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
