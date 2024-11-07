import { readParquet } from "parquet-wasm";
import { tableFromIPC } from "apache-arrow";
import * as aq from "arquero";

// This is from where we are downloading our data.
const taxiUrl = "https://d37ci6vzurychx.cloudfront.net/trip-data/yellow_tripdata_2024-08.parquet"

const resp = await fetch(taxiUrl); // fetch the data
const parquetUint8Array = new Uint8Array(await resp.arrayBuffer()); // Make an array from the response
const arrowWasmTable = readParquet(parquetUint8Array); // Turn the parquet file into an Arrow WASM table.
const arrowTable = tableFromIPC(arrowWasmTable.intoIPCStream()); // Then into a regular table.

// Create a list of columns we want to keep
const columns = [
        "tpep_pickup_datetime",
        "tpep_dropoff_datetime",
        "passenger_count",
        "trip_distance",
        "fare_amount",
        "extra",
        "mta_tax",
        "improvement_surcharge",
        "congestion_surcharge",
        "Airport_fee",
        "tip_amount",
    ];

// Convert the arrow table into an Arquero table.
const df = aq.fromArrow(arrowTable); 

// Write the Arquero table, with only our selected columns, to standard out
process.stdout.write(df.select(columns).toArrowIPC());
