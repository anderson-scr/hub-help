'1 -' RESTORE FILELISTONLY FROM DISK = 'C:\X\AdventureWorks2016.bak'

'2 -' RESTORE DATABASE AdventureWorks2016 FROM  DISK = 'C:\X\AdventureWorks2016.bak'
		WITH RECOVERY, STATS=10,
		MOVE 'AdventureWorks2016_Data' TO 'C:\SQL\SQL_DATA\AdventureWorks2016_Data.mdf',
		MOVE 'AdventureWorks2016_Log' TO 'C:\SQL\SQL_LOG\AdventureWorks2016_Data.ldf'