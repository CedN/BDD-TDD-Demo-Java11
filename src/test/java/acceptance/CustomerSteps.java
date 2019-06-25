package acceptance;

import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.repositories.CustomerRepository;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import io.cucumber.datatable.DataTable;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public class CustomerSteps {

    private final CustomerRepository customerRegistry;

    public CustomerSteps(CustomerRepository customerRepository) {
        this.customerRegistry = customerRepository;
    }

    @Given("^des clients existent:$")
    public void customersExist(DataTable dataTable) throws Throwable {
        List<Map<String, String>> dataMaps = dataTable.asMaps(String.class, String.class);
        dataMaps.forEach(dataMap -> {
            Customer customer = new Customer(dataMap.get("id"), dataMap.get("firstName"), dataMap.get("lastName"));
            customerRegistry.add(customer);
        });
    }
}
