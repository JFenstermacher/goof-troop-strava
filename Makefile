ROOT_DIR := $(shell pwd)
TERRAFORM_DIR := $(ROOT_DIR)/terraform

create:
	cd $(TERRAFORM_DIR); terraform init; terraform apply

destroy:
	cd $(TERRAFORM_DIR); terraform init; terraform destroy

output:
	cd $(TERRAFORM_DIR); terraform init; terraform output

up:
	docker-compose build; docker-compose up -d

down:
	docker-compose down
