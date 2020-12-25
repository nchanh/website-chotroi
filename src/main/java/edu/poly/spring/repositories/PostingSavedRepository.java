package edu.poly.spring.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.poly.spring.models.PostingSaved;

@Repository
public interface PostingSavedRepository extends CrudRepository<PostingSaved, Integer>{

	PostingSaved findByAssessor(String assessor);
	List<PostingSaved> findPostingSavedByAssessor(String assessor);
	
}
