# `authServerPolicy` Submodule <a name="`authServerPolicy` Submodule" id="@cdktf/provider-okta.authServerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicy <a name="AuthServerPolicy" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy okta_auth_server_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy

authServerPolicy.AuthServerPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  client_whitelist: typing.List[str],
  description: str,
  name: str,
  priority: typing.Union[int, float],
  id: str = None,
  status: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.authServerId">auth_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#auth_server_id AuthServerPolicy#auth_server_id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.clientWhitelist">client_whitelist</a></code> | <code>typing.List[str]</code> | Use ["ALL_CLIENTS"] when unsure. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#description AuthServerPolicy#description}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#name AuthServerPolicy#name}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the auth server policy. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#id AuthServerPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#status AuthServerPolicy#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | Auth server policy type, unlikely this will be anything other then the default. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.authServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#auth_server_id AuthServerPolicy#auth_server_id}.

---

##### `client_whitelist`<sup>Required</sup> <a name="client_whitelist" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.clientWhitelist"></a>

- *Type:* typing.List[str]

Use ["ALL_CLIENTS"] when unsure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#client_whitelist AuthServerPolicy#client_whitelist}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#description AuthServerPolicy#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#name AuthServerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the auth server policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#priority AuthServerPolicy#priority}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#id AuthServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#status AuthServerPolicy#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.Initializer.parameter.type"></a>

- *Type:* str

Auth server policy type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#type AuthServerPolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy

authServerPolicy.AuthServerPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy

authServerPolicy.AuthServerPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy

authServerPolicy.AuthServerPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.authServerIdInput">auth_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.clientWhitelistInput">client_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.authServerId">auth_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.clientWhitelist">client_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id_input`<sup>Optional</sup> <a name="auth_server_id_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.authServerIdInput"></a>

```python
auth_server_id_input: str
```

- *Type:* str

---

##### `client_whitelist_input`<sup>Optional</sup> <a name="client_whitelist_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.clientWhitelistInput"></a>

```python
client_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

---

##### `client_whitelist`<sup>Required</sup> <a name="client_whitelist" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.clientWhitelist"></a>

```python
client_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyConfig <a name="AuthServerPolicyConfig" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy

authServerPolicy.AuthServerPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  client_whitelist: typing.List[str],
  description: str,
  name: str,
  priority: typing.Union[int, float],
  id: str = None,
  status: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.authServerId">auth_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#auth_server_id AuthServerPolicy#auth_server_id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.clientWhitelist">client_whitelist</a></code> | <code>typing.List[str]</code> | Use ["ALL_CLIENTS"] when unsure. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#description AuthServerPolicy#description}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#name AuthServerPolicy#name}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the auth server policy. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#id AuthServerPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#status AuthServerPolicy#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.type">type</a></code> | <code>str</code> | Auth server policy type, unlikely this will be anything other then the default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#auth_server_id AuthServerPolicy#auth_server_id}.

---

##### `client_whitelist`<sup>Required</sup> <a name="client_whitelist" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.clientWhitelist"></a>

```python
client_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Use ["ALL_CLIENTS"] when unsure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#client_whitelist AuthServerPolicy#client_whitelist}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#description AuthServerPolicy#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#name AuthServerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the auth server policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#priority AuthServerPolicy#priority}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#id AuthServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#status AuthServerPolicy#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicy.AuthServerPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Auth server policy type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#type AuthServerPolicy#type}

---



