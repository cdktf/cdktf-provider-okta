# `okta_auth_server`

Refer to the Terraform Registory for docs: [`okta_auth_server`](https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server).

# `authServer` Submodule <a name="`authServer` Submodule" id="@cdktf/provider-okta.authServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServer <a name="AuthServer" id="@cdktf/provider-okta.authServer.AuthServer"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server okta_auth_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServer.AuthServer.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server

authServer.AuthServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audiences: typing.List[str],
  name: str,
  credentials_rotation_mode: str = None,
  description: str = None,
  id: str = None,
  issuer_mode: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.audiences">audiences</a></code> | <code>typing.List[str]</code> | Currently Okta only supports a single value here. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#name AuthServer#name}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#description AuthServer#description}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#id AuthServer#id}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#status AuthServer#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.audiences"></a>

- *Type:* typing.List[str]

Currently Okta only supports a single value here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#audiences AuthServer#audiences}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#name AuthServer#name}.

---

##### `credentials_rotation_mode`<sup>Optional</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.credentialsRotationMode"></a>

- *Type:* str

Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff.

This should rarely be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#credentials_rotation_mode AuthServer#credentials_rotation_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#description AuthServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#id AuthServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.issuerMode"></a>

- *Type:* str

*Early Access Property*.

Indicates which value is specified in the issuer of the tokens that a Custom Authorization Server returns: the original Okta org domain URL or a custom domain URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#issuer_mode AuthServer#issuer_mode}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServer.AuthServer.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#status AuthServer#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetCredentialsRotationMode">reset_credentials_rotation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServer.AuthServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServer.AuthServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServer.AuthServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServer.AuthServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServer.AuthServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServer.AuthServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServer.AuthServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServer.AuthServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServer.AuthServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServer.AuthServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServer.AuthServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_credentials_rotation_mode` <a name="reset_credentials_rotation_mode" id="@cdktf/provider-okta.authServer.AuthServer.resetCredentialsRotationMode"></a>

```python
def reset_credentials_rotation_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.authServer.AuthServer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServer.AuthServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.authServer.AuthServer.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authServer.AuthServer.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServer.AuthServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server

authServer.AuthServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServer.AuthServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServer.AuthServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server

authServer.AuthServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServer.AuthServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServer.AuthServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server

authServer.AuthServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServer.AuthServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.credentialsLastRotated">credentials_last_rotated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.credentialsNextRotation">credentials_next_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.credentialsRotationModeInput">credentials_rotation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServer.AuthServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServer.AuthServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServer.AuthServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServer.AuthServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServer.AuthServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServer.AuthServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServer.AuthServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServer.AuthServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServer.AuthServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServer.AuthServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServer.AuthServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServer.AuthServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServer.AuthServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServer.AuthServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials_last_rotated`<sup>Required</sup> <a name="credentials_last_rotated" id="@cdktf/provider-okta.authServer.AuthServer.property.credentialsLastRotated"></a>

```python
credentials_last_rotated: str
```

- *Type:* str

---

##### `credentials_next_rotation`<sup>Required</sup> <a name="credentials_next_rotation" id="@cdktf/provider-okta.authServer.AuthServer.property.credentialsNextRotation"></a>

```python
credentials_next_rotation: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.authServer.AuthServer.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.authServer.AuthServer.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-okta.authServer.AuthServer.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_rotation_mode_input`<sup>Optional</sup> <a name="credentials_rotation_mode_input" id="@cdktf/provider-okta.authServer.AuthServer.property.credentialsRotationModeInput"></a>

```python
credentials_rotation_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.authServer.AuthServer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServer.AuthServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.authServer.AuthServer.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServer.AuthServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authServer.AuthServer.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-okta.authServer.AuthServer.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_rotation_mode`<sup>Required</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServer.AuthServer.property.credentialsRotationMode"></a>

```python
credentials_rotation_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServer.AuthServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServer.AuthServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServer.AuthServer.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServer.AuthServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServer.AuthServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServer.AuthServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerConfig <a name="AuthServerConfig" id="@cdktf/provider-okta.authServer.AuthServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServer.AuthServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server

authServer.AuthServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audiences: typing.List[str],
  name: str,
  credentials_rotation_mode: str = None,
  description: str = None,
  id: str = None,
  issuer_mode: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Currently Okta only supports a single value here. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#name AuthServer#name}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#description AuthServer#description}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#id AuthServer#id}. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.authServer.AuthServerConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#status AuthServer#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Currently Okta only supports a single value here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#audiences AuthServer#audiences}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#name AuthServer#name}.

---

##### `credentials_rotation_mode`<sup>Optional</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.credentialsRotationMode"></a>

```python
credentials_rotation_mode: str
```

- *Type:* str

Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff.

This should rarely be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#credentials_rotation_mode AuthServer#credentials_rotation_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#description AuthServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#id AuthServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

*Early Access Property*.

Indicates which value is specified in the issuer of the tokens that a Custom Authorization Server returns: the original Okta org domain URL or a custom domain URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#issuer_mode AuthServer#issuer_mode}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServer.AuthServerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/auth_server#status AuthServer#status}.

---



