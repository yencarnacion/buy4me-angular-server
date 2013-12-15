package b4m

import grails.rest.Resource

@Resource(uri = "/needItems", formats = ['json', 'xml'])
class NeedItem {

    String title;
    String fromWhere;
    static constraints = {
    }
}
