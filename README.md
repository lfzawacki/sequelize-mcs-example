Getting started
====

## Creating your database replication

(Assuming ubuntu 16.04, you can use different postgresql packages if you want)

    $ sudo apt-get install postgresql-9.5

    $ sudo apt-get install pgpool2

#### Create your databases

    $ pg_createcluster -p 5433 --start-conf manual 9.5 test0

    $ pg_createcluster -p 5434 --start-conf manual 9.5 test1

To initialize/stop each database you can do

    sudo service postgresql@9.5-test0 <start|stop|restart>

    sudo service postgresql@9.5-test1 <start|stop|restart>

#### Extra configs

    $ psql -p 5433 -W -f /usr/share/postgresql/9.5/extension/pgpool-recovery.sql template1
    $ psql -p 5433 -W -f /usr/share/postgresql/9.5/extension/pgpool-regclass.sql template1

    $ psql -p 5434 -W -f /usr/share/postgresql/9.5/extension/pgpool-recovery.sql template1
    $ psql -p 5434 -W -f /usr/share/postgresql/9.5/extension/pgpool-regclass.sql template1

#### Configure pg_hba.conf in each database

You should allow connections from the ip addresses accessing the databases

    /etc/postgresql/9.5/test0/pg_hba.conf
    /etc/postgresql/9.5/test1/pg_hba.conf
    /etc/pgpool2/pool_hba.conf

#### Configure pgpool

Didn't do anything in /etc/pgpool2/pcp.conf

Look at config/pgpool.conf for the correct configuration for /etc/pgpool2/pgpool.conf

After this you should start the separate databases and do:

    sudo pgpool -D

You should be able to reach the database at <host>:5432

### Setting up Sequelize

    npm install

    node_modules/.bin/sequelize db:create

    node_modules/.bin/sequelize db:migrate

    node ps.js