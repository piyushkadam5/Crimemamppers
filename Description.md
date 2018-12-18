# Crimemamppers
Crime Mapper:
#1.Problem Statement:
	Sir, Our  problem statement was to develop a system 
	which can hold the Crime-Data based on the location 
	at which the crime has happened and it can 
	show that data on to a map for the police department.
	
	
#2.How we provided our solution for this problem?
	for this problem statement we firstly serached real-time
	crime-mapping sites and we found some good sites which 
	are currently used by the Police Dept. of U.S.
	from that we got a basic idea how to design our own 
	crime-mapping website.One more thing which we have to do 
	is an cross platform application for the police users to 
	get instant access to our System.
	So summing up 
	
  #1.  
  we have to do a fully working website and a
	cross platform application...within only 1 month span...
	
  #2.  
  As we were aware that if possible then our apllication
	might be used nation wide for every state... so our 
	Application should handle multiple requests at a time...
	
  #3.  
  And as we are maintaining a centrallised database for 
	both the app and web-app so it's obvious that the database
	having all the load of our application..  
	
  #4.  
  So we need to use the database which responds quickly and
	can be able to handle concurrent read and write operations..
	And the database must be flexible means at the running time 
	of hackathon if any big changes are required then it can be 
	done very smoothly without affecting our prvious data..
	So considering all these conditions we gone for the NoSQL Databse
	MongoDb..
	
  #5.  
  As we are in need to minimize our work as much as possible...
	we decided to go for Node-js and Angular-js.
	the biggest advantage that we got from choosing these technologis 
	is that we dosen't have to write all the logic again for the 
	Android Apllication and to develop app we have used Ionic Framework
	which is based on Angular-js. Within a Night Our Android Apllication was
	ready working.. that gave us the push we needed at the competition...
	
	
	
	
	#flow 
	#1.Police user logs in..
	#2.Fill in the details of Crime.. and location at which it is happend and finally submit that information to the system.
	#3.that submitted information contains the id of the police and also from which police station is that police user is.
	#4.from location we get the district or city in which crime has happened we store the crime data along with thier city codes as well.

