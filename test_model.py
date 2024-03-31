import unittest
from unittest.mock import patch
from model import process_resume

class ProcessResumeTestCase(unittest.TestCase):
    @patch('model.read_pdf_file')
    @patch('model.nlp')
    def test_process_resume(self, mock_nlp, mock_read_pdf_file):
        # Mock the return values and behavior of read_pdf_file and nlp functions
        mock_read_pdf_file.return_value = "Sample resume text"
        mock_nlp.return_value.ents = [
            {'text': 'Python', 'label_': 'LANGUAGE'},
            {'text': 'JavaScript', 'label_': 'LANGUAGE'},
            {'text': 'MongoDB', 'label_': 'LANGUAGE'}
        ]

        # Mock the skills_list
        skills_list = ['Python', 'JavaScript', 'React']

        # Call the process_resume function
        process_resume('/path/to/resume.pdf')

        # Assert that the resume_skills dictionary is updated correctly
        expected_skills = {
            'resume.pdf': ['Python', 'JavaScript', 'MongoDB']
        }
        self.assertEqual(resume_skills, expected_skills)

if __name__ == '__main__':
    unittest.main()