package io.fred.calendar.Backend.labels;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class LabelService {
	@Autowired
	private LabelRepository repo;

	public Label create(@Valid CreateLabelDTO data) {
		Label newLabel = mapper.map(data, Label.class);
		return this.repo.save(newLabel);
	}

	public List<Label> findAll() {
		return this.repo.findAll();
	}

	public Optional<Label> findById(Long labelId) {
		return this.repo.findById(labelId);
	}

	public Optional<Label> updateById(@Valid UpdateLabelDTO data, Long id) {
		Optional<Label> maybeLabel = this.findById(id);
		if (maybeLabel.isEmpty()) {
			return maybeLabel;
		}
		
		Label foundLabel = maybeLabel.get();

		foundLabel.setName(data.getName().trim());
		Label updated = this.repo.save(foundLabel);
		return Optional.of(updated);
	}

	public boolean deleteLabelById(Long id) {
		Optional<Label> maybeLabel = this.repo.findById(id);
		if(maybeLabel.isEmpty()) {
			return false;
		}
		this.repo.delete(maybeLabel.get());
		return true;
}
}
