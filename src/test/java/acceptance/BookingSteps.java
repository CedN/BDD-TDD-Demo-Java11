package acceptance;

import com.wealcome.testbdd.domain.Booking;
import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.Travel;
import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;
import com.wealcome.testbdd.domain.repositories.VTCRepository;
import com.wealcome.testbdd.usecases.BookVTC;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.Set;

import static org.junit.Assert.assertEquals;

public class BookingSteps {

    private final VTCRepository vtcRepository;
    private final BookingRepository bookingRepository;
    private final CustomerAccountRepository customerAccountRepository;
    private final AuthenticationGateway authenticationGateway;
    private final BookVTC bookVTC;
    private final BookingAttempt bookingAttempt;

    public BookingSteps(VTCRepository vtcRepository,
                        BookingRepository bookingRepository,
                        CustomerAccountRepository customerAccountRepository,
                        AuthenticationGateway authenticationGateway) {
        this.vtcRepository = vtcRepository;
        this.bookingRepository = bookingRepository;
        this.customerAccountRepository = customerAccountRepository;
        this.authenticationGateway = authenticationGateway;
        bookVTC = new BookVTC(customerAccountRepository, bookingRepository, authenticationGateway);
        bookingAttempt = new BookingAttempt();
    }

    @When("^je tente de réserver le VTC \"([^\"]*)\" de \"([^\"]*)\" à \"([^\"]*)\"$")
    public void iAttemptToBookTheVtcFromTo(String firstName, String startPoint, String destinationPoint) throws Throwable {
        vtcRepository.all().stream().filter(vtc -> vtc.getFirstName().equals(firstName)).forEach(vtc -> {
            bookVTC.handle(vtc, new Travel(startPoint, destinationPoint));
            bookingAttempt.setCustomer(authenticationGateway.currentCustomer().get());
            bookingAttempt.setVTC(vtc);
            bookingAttempt.setStartPoint(startPoint);
            bookingAttempt.setDestinationPoint(destinationPoint);
        });
    }


    @Then("^la réservation n'est pas effective$")
    public void theBookingIsNotValidated() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^et une alerte pour insuffisance de solde se lève$")
    public void andAnAlertIsThrownForTooLowBalance() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^et une alerte pour identification du client impossible se lève$")
    public void andAnAlertIsThrownForCustomerAuthenticationFailure() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^la réservation est effective$")
    public void theBookingIsValidated() throws Throwable {
        Set<Booking> bookings = bookingRepository.all();
        assertEquals(1, bookings.size());
        assertEquals(new Booking(bookingAttempt.customer, bookingAttempt.vtc,
                new Travel(bookingAttempt.startPoint, bookingAttempt.destinationPoint)), bookings.iterator().next());
    }

    private static class BookingAttempt {

        private Customer customer;
        private VTC vtc;
        private String startPoint;
        private String destinationPoint;

        void setCustomer(Customer customer) {
            this.customer = customer;
        }

        void setVTC(VTC VTC) {
            this.vtc = VTC;
        }

        void setStartPoint(String startPoint) {
            this.startPoint = startPoint;
        }

        void setDestinationPoint(String destinationPoint) {
            this.destinationPoint = destinationPoint;
        }
    }
}
