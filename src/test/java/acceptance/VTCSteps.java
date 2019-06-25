package acceptance;

import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.repositories.VTCRepository;
import cucumber.api.java.en.Given;
import io.cucumber.datatable.DataTable;

import java.util.List;
import java.util.Map;

public class VTCSteps {

    private final VTCRepository vtcRepository;

    public VTCSteps(VTCRepository vtcRepository) {
        this.vtcRepository = vtcRepository;
    }

    @Given("^des VTC existent:$")
    public void vtcExist(DataTable dataTable) throws Throwable {
        List<Map<String, String>> dataMaps = dataTable.asMaps(String.class, String.class);
        dataMaps.forEach(dataMap -> {
            VTC vtc = new VTC(dataMap.get("id"), dataMap.get("firstName"), dataMap.get("lastName"));
            vtcRepository.add(vtc);
        });
    }
}
