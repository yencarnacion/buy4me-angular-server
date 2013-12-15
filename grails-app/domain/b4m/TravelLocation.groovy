package b4m

import grails.rest.Resource


@Resource(uri = "/travelLocations", formats = ['json', 'xml'])

class TravelLocation {

    static constraints = {
    }

    String travelLocation;
    String travelDate;
}
