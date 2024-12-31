Feature: Health Check API

  Scenario: Checking the health of the service
    Given the service is running
    When I make a GET request to "/health"
    Then the response status should be 200
    And the response should contain "status" with value "200" and "message" with value "The github-security-monitor app is running"
