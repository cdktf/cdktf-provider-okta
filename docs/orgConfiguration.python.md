# `orgConfiguration` Submodule <a name="`orgConfiguration` Submodule" id="@cdktf/provider-okta.orgConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgConfiguration <a name="OrgConfiguration" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration okta_org_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  company_name: str,
  address1: str = None,
  address2: str = None,
  billing_contact_user: str = None,
  city: str = None,
  country: str = None,
  end_user_support_help_url: str = None,
  id: str = None,
  logo: str = None,
  opt_out_communication_emails: typing.Union[bool, IResolvable] = None,
  phone_number: str = None,
  postal_code: str = None,
  state: str = None,
  support_phone_number: str = None,
  technical_contact_user: str = None,
  website: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.companyName">company_name</a></code> | <code>str</code> | Name of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.address1">address1</a></code> | <code>str</code> | Primary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.address2">address2</a></code> | <code>str</code> | Secondary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.billingContactUser">billing_contact_user</a></code> | <code>str</code> | User ID representing the billing contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.city">city</a></code> | <code>str</code> | City of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.country">country</a></code> | <code>str</code> | Country of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.endUserSupportHelpUrl">end_user_support_help_url</a></code> | <code>str</code> | Support link of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#id OrgConfiguration#id}. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.optOutCommunicationEmails">opt_out_communication_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the org's users receive Okta Communication emails. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>str</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | Postal code of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.state">state</a></code> | <code>str</code> | State of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.supportPhoneNumber">support_phone_number</a></code> | <code>str</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.technicalContactUser">technical_contact_user</a></code> | <code>str</code> | User ID representing the technical contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.website">website</a></code> | <code>str</code> | The org's website. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.companyName"></a>

- *Type:* str

Name of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#company_name OrgConfiguration#company_name}

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.address1"></a>

- *Type:* str

Primary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.address2"></a>

- *Type:* str

Secondary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}

---

##### `billing_contact_user`<sup>Optional</sup> <a name="billing_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.billingContactUser"></a>

- *Type:* str

User ID representing the billing contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.city"></a>

- *Type:* str

City of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#city OrgConfiguration#city}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.country"></a>

- *Type:* str

Country of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#country OrgConfiguration#country}

---

##### `end_user_support_help_url`<sup>Optional</sup> <a name="end_user_support_help_url" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.endUserSupportHelpUrl"></a>

- *Type:* str

Support link of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#id OrgConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#logo OrgConfiguration#logo}

---

##### `opt_out_communication_emails`<sup>Optional</sup> <a name="opt_out_communication_emails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.optOutCommunicationEmails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the org's users receive Okta Communication emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.phoneNumber"></a>

- *Type:* str

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.postalCode"></a>

- *Type:* str

Postal code of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.state"></a>

- *Type:* str

State of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#state OrgConfiguration#state}

---

##### `support_phone_number`<sup>Optional</sup> <a name="support_phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.supportPhoneNumber"></a>

- *Type:* str

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}

---

##### `technical_contact_user`<sup>Optional</sup> <a name="technical_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.technicalContactUser"></a>

- *Type:* str

User ID representing the technical contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.website"></a>

- *Type:* str

The org's website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#website OrgConfiguration#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser">reset_billing_contact_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl">reset_end_user_support_help_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails">reset_opt_out_communication_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber">reset_support_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser">reset_technical_contact_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite">reset_website</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_address1` <a name="reset_address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_billing_contact_user` <a name="reset_billing_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser"></a>

```python
def reset_billing_contact_user() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_end_user_support_help_url` <a name="reset_end_user_support_help_url" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl"></a>

```python
def reset_end_user_support_help_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_opt_out_communication_emails` <a name="reset_opt_out_communication_emails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails"></a>

```python
def reset_opt_out_communication_emails() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_support_phone_number` <a name="reset_support_phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber"></a>

```python
def reset_support_phone_number() -> None
```

##### `reset_technical_contact_user` <a name="reset_technical_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser"></a>

```python
def reset_technical_contact_user() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite"></a>

```python
def reset_website() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfiguration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrgConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrgConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrgConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput">billing_contact_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput">end_user_support_help_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput">opt_out_communication_emails_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput">support_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput">technical_contact_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput">website_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser">billing_contact_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl">end_user_support_help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails">opt_out_communication_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber">support_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser">technical_contact_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website">website</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `billing_contact_user_input`<sup>Optional</sup> <a name="billing_contact_user_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput"></a>

```python
billing_contact_user_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `end_user_support_help_url_input`<sup>Optional</sup> <a name="end_user_support_help_url_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput"></a>

```python
end_user_support_help_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `opt_out_communication_emails_input`<sup>Optional</sup> <a name="opt_out_communication_emails_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput"></a>

```python
opt_out_communication_emails_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `support_phone_number_input`<sup>Optional</sup> <a name="support_phone_number_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput"></a>

```python
support_phone_number_input: str
```

- *Type:* str

---

##### `technical_contact_user_input`<sup>Optional</sup> <a name="technical_contact_user_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput"></a>

```python
technical_contact_user_input: str
```

- *Type:* str

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput"></a>

```python
website_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `billing_contact_user`<sup>Required</sup> <a name="billing_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser"></a>

```python
billing_contact_user: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `end_user_support_help_url`<sup>Required</sup> <a name="end_user_support_help_url" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl"></a>

```python
end_user_support_help_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `opt_out_communication_emails`<sup>Required</sup> <a name="opt_out_communication_emails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails"></a>

```python
opt_out_communication_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `support_phone_number`<sup>Required</sup> <a name="support_phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber"></a>

```python
support_phone_number: str
```

- *Type:* str

---

##### `technical_contact_user`<sup>Required</sup> <a name="technical_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser"></a>

```python
technical_contact_user: str
```

- *Type:* str

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website"></a>

```python
website: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrgConfigurationConfig <a name="OrgConfigurationConfig" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import org_configuration

orgConfiguration.OrgConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  company_name: str,
  address1: str = None,
  address2: str = None,
  billing_contact_user: str = None,
  city: str = None,
  country: str = None,
  end_user_support_help_url: str = None,
  id: str = None,
  logo: str = None,
  opt_out_communication_emails: typing.Union[bool, IResolvable] = None,
  phone_number: str = None,
  postal_code: str = None,
  state: str = None,
  support_phone_number: str = None,
  technical_contact_user: str = None,
  website: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName">company_name</a></code> | <code>str</code> | Name of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1">address1</a></code> | <code>str</code> | Primary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2">address2</a></code> | <code>str</code> | Secondary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser">billing_contact_user</a></code> | <code>str</code> | User ID representing the billing contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city">city</a></code> | <code>str</code> | City of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country">country</a></code> | <code>str</code> | Country of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl">end_user_support_help_url</a></code> | <code>str</code> | Support link of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#id OrgConfiguration#id}. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails">opt_out_communication_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the org's users receive Okta Communication emails. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode">postal_code</a></code> | <code>str</code> | Postal code of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state">state</a></code> | <code>str</code> | State of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber">support_phone_number</a></code> | <code>str</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser">technical_contact_user</a></code> | <code>str</code> | User ID representing the technical contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website">website</a></code> | <code>str</code> | The org's website. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

Name of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#company_name OrgConfiguration#company_name}

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1"></a>

```python
address1: str
```

- *Type:* str

Primary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2"></a>

```python
address2: str
```

- *Type:* str

Secondary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}

---

##### `billing_contact_user`<sup>Optional</sup> <a name="billing_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser"></a>

```python
billing_contact_user: str
```

- *Type:* str

User ID representing the billing contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city"></a>

```python
city: str
```

- *Type:* str

City of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#city OrgConfiguration#city}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Country of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#country OrgConfiguration#country}

---

##### `end_user_support_help_url`<sup>Optional</sup> <a name="end_user_support_help_url" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl"></a>

```python
end_user_support_help_url: str
```

- *Type:* str

Support link of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#id OrgConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#logo OrgConfiguration#logo}

---

##### `opt_out_communication_emails`<sup>Optional</sup> <a name="opt_out_communication_emails" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails"></a>

```python
opt_out_communication_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the org's users receive Okta Communication emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Postal code of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state"></a>

```python
state: str
```

- *Type:* str

State of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#state OrgConfiguration#state}

---

##### `support_phone_number`<sup>Optional</sup> <a name="support_phone_number" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber"></a>

```python
support_phone_number: str
```

- *Type:* str

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}

---

##### `technical_contact_user`<sup>Optional</sup> <a name="technical_contact_user" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser"></a>

```python
technical_contact_user: str
```

- *Type:* str

User ID representing the technical contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website"></a>

```python
website: str
```

- *Type:* str

The org's website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/org_configuration#website OrgConfiguration#website}

---



