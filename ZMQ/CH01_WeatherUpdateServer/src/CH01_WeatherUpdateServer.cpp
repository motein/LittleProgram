// Weather update server
// Binds PUB socket to tcp://*:5556
// Publishes random weather updates

#include <zmq/zmq.h>
#include <zmq/zhelpers.h>

int main() {
	// Prepare our context and publisher
	void *context = zmq_ctx_new ();
	void *publisher = zmq_socket (context, ZMQ_PUB);
	int rc = zmq_bind (publisher, "tcp://*:5556");
	assert (rc == 0);
//	rc = zmq_bind (publisher, "ipc://weather.ipc");
//	assert (rc == 0);

	// Initialize random number generator
	srandom ((unsigned) time (NULL));

	printf ("Ready to send data...\n");
	while (1) { // Get values that will fool the boss
		int zipcode, temperature, relhumidity;
//		zipcode = randof (100000);
		zipcode = 10001;
		temperature = randof (215) - 80;

		relhumidity = randof (50) + 10; // Send message to all subscribers
		char update [20];
		sprintf (update, "%05d %d %d", zipcode, temperature, relhumidity);
		printf("%5d\n", zipcode);
		s_send (publisher, update);
	}
	zmq_close (publisher);
	zmq_ctx_destroy (context);

	return 0;
}
