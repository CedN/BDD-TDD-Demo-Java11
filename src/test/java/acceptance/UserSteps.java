package acceptance;

import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.CustomerRepository;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import org.junit.Assert;

import java.util.Optional;

import static org.junit.Assert.assertTrue;

public class UserSteps {

    private final CustomerRepository customerRepository;
    private final AuthenticationGateway authenticationGateway;

    public UserSteps(CustomerRepository customerRepository, AuthenticationGateway authenticationGateway) {
        this.customerRepository = customerRepository;
        this.authenticationGateway = authenticationGateway;
    }

    @Given("^je suis authentifié en tant que \"([^\"]*)\"$")
    public void iAmAuthenticatedAs(String firstName) throws Throwable {
        Optional<Customer> optionialCustomer = customerRepository.all().stream().filter(customer -> customer.getFirstName().equals(firstName)).findFirst();
        optionialCustomer.ifPresent(authenticationGateway::authenticate);
        assertTrue(authenticationGateway.currentCustomer().isPresent());
    }

    @Given("^je ne suis pas authentifié$")
    public void iAmNotAuthenticated() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
