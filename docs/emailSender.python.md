# `emailSender` Submodule <a name="`emailSender` Submodule" id="@cdktf/provider-okta.emailSender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSender <a name="EmailSender" id="@cdktf/provider-okta.emailSender.EmailSender"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/email_sender okta_email_sender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSender(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  from_address: str,
  from_name: str,
  subdomain: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.fromAddress">from_address</a></code> | <code>str</code> | Email address to send from. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.fromName">from_name</a></code> | <code>str</code> | Name of sender. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.subdomain">subdomain</a></code> | <code>str</code> | Mail domain to send from. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#id EmailSender#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.fromAddress"></a>

- *Type:* str

Email address to send from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_address EmailSender#from_address}

---

##### `from_name`<sup>Required</sup> <a name="from_name" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.fromName"></a>

- *Type:* str

Name of sender.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_name EmailSender#from_name}

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.subdomain"></a>

- *Type:* str

Mail domain to send from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#subdomain EmailSender#subdomain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.emailSender.EmailSender.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#id EmailSender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.emailSender.EmailSender.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.emailSender.EmailSender.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.emailSender.EmailSender.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailSender.EmailSender.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.emailSender.EmailSender.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.emailSender.EmailSender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.emailSender.EmailSender.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.emailSender.EmailSender.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.emailSender.EmailSender.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.emailSender.EmailSender.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.emailSender.EmailSender.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSender.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSender.EmailSender.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.emailSender.EmailSender.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSender.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSender.EmailSender.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.emailSender.EmailSender.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSender.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailSender.EmailSender.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.dnsRecords">dns_records</a></code> | <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList">EmailSenderDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.fromAddressInput">from_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.fromNameInput">from_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.subdomainInput">subdomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.fromAddress">from_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.fromName">from_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.emailSender.EmailSender.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.emailSender.EmailSender.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailSender.EmailSender.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.emailSender.EmailSender.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.emailSender.EmailSender.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.emailSender.EmailSender.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.emailSender.EmailSender.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailSender.EmailSender.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailSender.EmailSender.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailSender.EmailSender.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailSender.EmailSender.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailSender.EmailSender.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailSender.EmailSender.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailSender.EmailSender.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktf/provider-okta.emailSender.EmailSender.property.dnsRecords"></a>

```python
dns_records: EmailSenderDnsRecordsList
```

- *Type:* <a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList">EmailSenderDnsRecordsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.emailSender.EmailSender.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `from_address_input`<sup>Optional</sup> <a name="from_address_input" id="@cdktf/provider-okta.emailSender.EmailSender.property.fromAddressInput"></a>

```python
from_address_input: str
```

- *Type:* str

---

##### `from_name_input`<sup>Optional</sup> <a name="from_name_input" id="@cdktf/provider-okta.emailSender.EmailSender.property.fromNameInput"></a>

```python
from_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.emailSender.EmailSender.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subdomain_input`<sup>Optional</sup> <a name="subdomain_input" id="@cdktf/provider-okta.emailSender.EmailSender.property.subdomainInput"></a>

```python
subdomain_input: str
```

- *Type:* str

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-okta.emailSender.EmailSender.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

---

##### `from_name`<sup>Required</sup> <a name="from_name" id="@cdktf/provider-okta.emailSender.EmailSender.property.fromName"></a>

```python
from_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailSender.EmailSender.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-okta.emailSender.EmailSender.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSender.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.emailSender.EmailSender.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSenderConfig <a name="EmailSenderConfig" id="@cdktf/provider-okta.emailSender.EmailSenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSenderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  from_address: str,
  from_name: str,
  subdomain: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.fromAddress">from_address</a></code> | <code>str</code> | Email address to send from. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.fromName">from_name</a></code> | <code>str</code> | Name of sender. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.subdomain">subdomain</a></code> | <code>str</code> | Mail domain to send from. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#id EmailSender#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

Email address to send from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_address EmailSender#from_address}

---

##### `from_name`<sup>Required</sup> <a name="from_name" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.fromName"></a>

```python
from_name: str
```

- *Type:* str

Name of sender.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_name EmailSender#from_name}

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

Mail domain to send from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#subdomain EmailSender#subdomain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.emailSender.EmailSenderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#id EmailSender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EmailSenderDnsRecords <a name="EmailSenderDnsRecords" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSenderDnsRecords()
```


## Classes <a name="Classes" id="Classes"></a>

### EmailSenderDnsRecordsList <a name="EmailSenderDnsRecordsList" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSenderDnsRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailSenderDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EmailSenderDnsRecordsOutputReference <a name="EmailSenderDnsRecordsOutputReference" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import email_sender

emailSender.EmailSenderDnsRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecords">EmailSenderDnsRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.emailSender.EmailSenderDnsRecordsOutputReference.property.internalValue"></a>

```python
internal_value: EmailSenderDnsRecords
```

- *Type:* <a href="#@cdktf/provider-okta.emailSender.EmailSenderDnsRecords">EmailSenderDnsRecords</a>

---


